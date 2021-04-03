const size = {
    mobile: '767px',
    tablet: '1024px',
    desktop: '1025px'
  };

const theme = {
    main_color: 'rgb(255, 82, 82)',
    main_white: '#fffcfc',
    main_bg_color: '#f7f8f9',
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
    flex_column:
      'display: flex; flex-direction:column; align-items: center; justify-content: space-between; ',
    flex_row:
      'display: flex; align-items: center; justify-content: space-between;'
  };
  
  /*
    https://howdy-mj.me/css/styled-components-with-global-style/
  
    @media screen and (max-width : 767px) {
  
  }
    @media ${props => props.theme.table} {
      width: 100%;
      margin: 0 auto;
    } */
  
  export default theme;