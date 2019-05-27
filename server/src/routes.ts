import { AsyncRouter } from 'express-async-router'
import { Point } from '../../model/Point'

const router = AsyncRouter()

router.get('/ping', async () => 'OK')

router.get('/points', async ({ db }) => {
  return db.collection<Point>('points').find().toArray()
})

export default router