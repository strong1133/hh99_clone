const size = {
  mobile: '767px',
  tablet: '1024px',
  desktop: '1025px'
};

const theme = {
  main_color: 'rgb(255, 82, 82)',
  main_white: '#fffcfc',
  main_black: '#343a40',
  main_bg_color: '#f7f8f9',
  velog_green: '#12b886',
  gray: '#adb5bd',
  post_bg: '#f1f3f5',
  black: '#343a40',
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  flex_column:
    'display: flex; flex-direction:column; align-items: center; justify-content: space-between; ',
  flex_row:
    'display: flex; align-items: center; justify-content: space-between;',
  default_width: 'width:98vw; max-width:768px',
  max_width: `max-width:768px`
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
