import styles from './Grid.module.scss';

function Grid({ children, minWidth, numberColumn, colGap, rowGap, className }) {
   const classes = `${className && ([styles.className] = className)}`;
   const css = {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(max(${minWidth}, calc((100% / calc(${numberColumn})) - (${colGap} * (${numberColumn} - 1)))), 1fr)`,
      gap: `${rowGap} ${colGap}`,
   };
   return (
      <div style={css} className={classes}>
         {children}
      </div>
   );
}

export default Grid;
