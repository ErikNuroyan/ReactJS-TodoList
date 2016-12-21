module.exports={
entry:'./yeah.js',
output:{

  path:'./',
  filename:'bundle.js',
},
module:{
  loaders:[
    {
      test:/\.js$/,
      exclude:/node_mudules/,
      include:`${__dirname}`,
      loader:'babel',
      query:{
        presets:['es2015','react']
      }
    }
  ]
}



}
