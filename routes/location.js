const { Router } = require('express')
const router = Router()
const controllers = require ('../controllers')

router.get('/', controllers.getAllLocations);


//Review routes/// api/location/:locationID/review
router.get('/:locationId/review', controllers.getAllReviews)

router.put('/:locationId/review/:reviewId', controllers.updateReview)

router.post('/:locationId/review/:reviewId', controllers.createReview)


module.exports= router
