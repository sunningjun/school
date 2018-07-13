
const app = getApp()

Page({

  data: {

    routers: [

      {

        name: 'HTML',

        url: '/pages/Course/course',

        icon: '/image/java_ico.png',

        code: '10'

      },

      {

        name: 'Java',

        url: '/pages/Course/course',

        icon: '/image/python_ico.png',

        code: '11'

      },

      {

        name: 'CSS',

        url: '/pages/Course/course',

        icon: '/image/java_ico.png',

        code: '10'

      },

      {

        name: 'PHP',

        icon: '/image/python_ico.png',

        code: '11'

      },

      {

        name: 'Python',

        url: '/pages/Course/course',

        icon: '/image/java_ico.png',

        code: '10'

      },

      {

        name: 'JavaScript',

        icon: '/image/python_ico.png',

        code: '11'

      },

      {

        name: 'C++',

        url: '/pages/Course/course',

        icon: '/image/java_ico.png',

        code: '10'

      },

      {

        name: 'Object-C',

        icon: '/image/python_ico.png',

        code: '11'

      },

      {

        name: 'Ruby',

        url: '/pages/Course/course',

        icon: '/image/java_ico.png',

        code: '10'

      }

    ]

  },

  onLoad: function () {

    console.log('onLoad')

    var that = this

  }

})  
