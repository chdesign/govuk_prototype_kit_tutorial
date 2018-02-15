var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/lesson-2/juggling-trick', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingAbility = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingAbility == "3 or more"){
    // Send user to next page
    res.redirect('/lesson-2/juggling-trick')
  }
  else {
    // Send user to ineligible page
    res.redirect('/lesson-2/ineligible')
  }

})

module.exports = router
