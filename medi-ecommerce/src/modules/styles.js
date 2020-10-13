export const styles = {
  navBar: {
    navOverlay: {
      position: 'absolute',
      zIndex: 1,
      backgroundColor: 'rgba(10, 10, 10, 0.3)',
      top: 0,
      left: 0,
      height: '100%',
      right: 0,
      bottom: 0,
      padding: 0,
      margin: 0
    },
    navCartButton: {
      backgroundColor: 'royalblue',
      color: 'white',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  },
  listViewScreen: {
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '50px',
      paddingBottom: '100px'
    },
  }
};

export default styles;
