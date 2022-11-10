import styles from './MailBoxTippy.module.scss';
import { Tags } from 'src/components/Tags';
import { Fragment, useEffect, useState } from 'react';
import useDebound from 'src/components/Hook/useDebound';
import { Wrapper } from 'src/components/Poper';
import MailBoxContent from './MailBoxContent/MailBoxContent';
import { LoadingAnimation } from 'components/LoadingAnimation';

function MailBoxTippy({ data }) {
   const [loading, setLoading] = useState(false);
   const [type, setType] = useState(1);
   const debound = useDebound(type, 500);

   useEffect(() => {
      setLoading(false);
   }, [debound]);

   return (
      <Wrapper className={styles.wrapper}>
         <header className={styles.header}>
            <h2 className={styles.message}>Notifications</h2>
            <div className={styles.actionTitle}>
               {data.noData.map((item) => {
                  return (
                     <Tags
                        item={item}
                        className={styles.tag}
                        blackWhite={item.id === type}
                        key={item.id}
                        onClick={() => {
                           setType(item.id);
                           setLoading(true);
                        }}
                     ></Tags>
                  );
               })}
            </div>
         </header>

         <div className={styles.content}>
            {/* Active */}
            <Fragment>
               {loading && (
                  <div className={styles.loading}>
                     <LoadingAnimation size={20}></LoadingAnimation>
                  </div>
               )}

               {!loading && <MailBoxContent data={data.data} type={type}></MailBoxContent>}
            </Fragment>

            {/* None Active */}
            {data.data.length <= 0 && (
               <div className={styles.noData}>
                  {loading && (
                     <div className={styles.loading}>
                        <LoadingAnimation size={20}></LoadingAnimation>
                     </div>
                  )}

                  {!loading &&
                     data.noData.map((item) => {
                        return (
                           item.id === debound && (
                              <Fragment key={item.id}>
                                 {item.nonIcon}
                                 <h4 className={styles.noData_Comment}>{item.non}</h4>
                                 <p className={styles.noData_SubComment}>{item.nonSub}</p>
                              </Fragment>
                           )
                        );
                     })}
               </div>
            )}
         </div>
      </Wrapper>
   );
}

export default MailBoxTippy;
