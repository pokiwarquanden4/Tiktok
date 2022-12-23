import styles from './EditProfile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { inputZoneSelector } from 'redux/selectors/inputZoneSelector';
import { InputZone } from 'components/InputZone';
import { userAvatar } from 'api';
import { useCallback, useState } from 'react';
import { Pencil } from 'components/Icon';
import Button from 'components/Button';
import { activeUserSelector } from 'redux/selectors/usersSelector';
import { activeUser } from 'redux/actions/usersActions/usersActions';
import { inputZone } from 'redux/actions/InputZoneActions/InputZoneActions';

function EditProfile() {
   const dispatch = useDispatch();
   const currentUser = useSelector(activeUserSelector);
   const [fileAvatar, setFileAvatar] = useState(null);
   const [avatar, setAvatar] = useState(null);
   const [userName, setUserName] = useState(currentUser.nickName);
   const [name, setName] = useState(currentUser.full_name);
   const [bio, setBio] = useState(currentUser.description);
   const inputStatus = useSelector(inputZoneSelector);
   const getAvatar = useCallback((user) => {
      if (user.avatar === undefined) {
         return;
      }
      return userAvatar(user.nickName + '/' + user.avatar);
   });
   const uploadAvatar = async (e) => {
      const file = e.target.files[0];
      setFileAvatar(file);
      const base64 = await convertBase64(file);
      setAvatar(base64);
   };
   const convertBase64 = useCallback((file) => {
      return new Promise((resolve, reject) => {
         const fileReader = new FileReader();
         fileReader.readAsDataURL(file);
         fileReader.onload = () => {
            resolve(fileReader.result);
         };
         fileReader.onerror = (err) => {
            reject(err);
         };
      });
   });

   return (
      !inputStatus.editUser && (
         <InputZone width="700px" height="700px" type="editProfile">
            <div className={styles.wrapper}>
               <div className={styles.header}>Edit profile</div>
               <div className={styles.profilePhoto}>
                  <div className={styles.profilePhoto_header}>Profile photo</div>
                  <div className={styles.avatar}>
                     <label htmlFor="editProfile_avatar">
                        <img className={styles.img} src={!avatar ? getAvatar(currentUser) : avatar} alt="null"></img>
                        <div className={styles.editButton}>
                           <Pencil></Pencil>
                        </div>
                     </label>
                     <input
                        type="file"
                        id="editProfile_avatar"
                        accept="img/png"
                        style={{ display: 'none' }}
                        onChange={uploadAvatar}
                     ></input>
                  </div>
               </div>
               <div className={styles.userName}>
                  <div className={styles.userName_header}>Username</div>
                  <div className={styles.userName_content}>
                     <input
                        className={styles.userName_input}
                        value={userName}
                        onChange={(e) => {
                           setUserName(e.target.value);
                        }}
                     ></input>
                     <div className={styles.userName_notice}>
                        <div className={styles.link}>www.tiktok.com/@tmquang3</div>
                        <div className={styles.notification}>
                           Usernames can only contain letters, numbers, underscores, and periods. Changing your username
                           will also change your profile link.
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.name}>
                  <div className={styles.name_header}>Name</div>
                  <div className={styles.name_content}>
                     <input
                        className={styles.name_input}
                        value={name}
                        onChange={(e) => {
                           setName(e.target.value);
                        }}
                     ></input>
                     <div className={styles.name_notification}>
                        Your nickname can only be changed once every 7 days.
                     </div>
                  </div>
               </div>
               <div className={styles.bio}>
                  <div className={styles.bio_header}>Bio</div>
                  <div className={styles.bio_content}>
                     <textarea
                        className={styles.bio_input}
                        value={bio}
                        onChange={(e) => {
                           const value = e.target.value;
                           if (value.length <= 80) {
                              setBio(e.target.value);
                           }
                        }}
                     ></textarea>
                     <div className={styles.bio_letters}>{bio.length}/80</div>
                  </div>
               </div>
               <div className={styles.button}>
                  <Button
                     text
                     className={styles.button_cancel}
                     onClick={() => {
                        dispatch(inputZone.hideEditUser());
                     }}
                  >
                     Cancel
                  </Button>
                  <Button
                     primary
                     className={styles.button_save}
                     onClick={() => {
                        const formData = new FormData();
                        formData.append('nickName', userName);
                        formData.append('avatar', fileAvatar);
                        formData.append('avatarName', currentUser.avatar);
                        formData.append('full_name', name);
                        formData.append('description', bio);

                        dispatch(activeUser.editUserRequest(formData));
                        dispatch(inputZone.hideEditUser());
                     }}
                  >
                     Save
                  </Button>
               </div>
            </div>
         </InputZone>
      )
   );
}

export default EditProfile;
