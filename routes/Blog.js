var express = require('express');
var router = express.Router();
var Blog = require('../model/blogModel');

/*

/projects               GET   (list all projects)
/projects/alias         GET   (Get by alias)
/projects               POST  (Create a new project)
/projects/alias         PUT   (Update the project)
/projects/alias         DELETE (remove a project)

*/

function urlify(str){
  var urlifyStr = str.trim().toLowerCase();
  urlifyStr = urlifyStr.replace(/ /g,'-');
  // handle for ? & - 
  return urlifyStr;
}

/* GET all projects listing. */
router.get('/', function(req, res, next) {
  Blog.find({}, function(err, Blog){
    console.log(JSON.stringify(Blog));

    if(err){
        console.log(JSON.stringify(err));
        res.json({code: 500, message: 'Something went wrong'});
    }else if (Blog){
      res.json({code: 200, data:Blogs});
    }
  });
});
//
// /* Create project. */
// router.put('/:projectAlias', function(req, res, next) {
//   var pObject = req.body;

//   Project.findOne({'alias': projectAlias}, function(err, project){
//     if(err){
//         callback(err, null);
//     }else{

//         console.log(JSON.stringify(project));
//         if(pObject.name){
//             project.name = pObject.name;
//         }
//         if(pObject.image){
//             project.image = pObject.image;
//         }
//         if(pObject.description){
//             project.description = pObject.description;
//         }
//         if(pObject.githubUrl){
//             project.githubUrl = pObject.githubUrl;
//         }
        
//         project.save(function(err, project){
//             console.log(JSON.stringify(project));
//             if(err){
//               res.json({code: 500, message: 'Something went wrong'});
//             }else{
//               res.json({code: 200, data: project}); 
//             }
//         });
//     }
//   });
// });

// /* Create project. */
// router.delete('/:projectAlias', function(req, res, next) {
//   Project.remove({'alias': req.params.projectAlias}, function(err, project){
//     if(err){
//       res.json({code: 500, message: 'Something went wrong'});
//     }else{
//       res.json({code: 200, data: project}); 
//     }
//   });
// });

module.exports = router;
