interface CustomToastOptions {
  success: {
    theme: {
      primary: string
    }
    style: {
      background: string
      color: string
    }
    iconTheme: {
      primary: string
      secondary: string
    }
    duration: number
  }
 
}

const toastOptions: CustomToastOptions = {
  success: {
    theme: {
      primary: '#5588ac'
    },
    style: {
      background: '#5588ac',
      color: 'white'
    },
    iconTheme: {
      primary: '#d3eafa',
      secondary: 'black'
    },
    duration: 3000
  },
 
}

export default toastOptions
