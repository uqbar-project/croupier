import { AsyncRouter } from 'express-async-router'
import { Point } from '../../model/Point'

const router = AsyncRouter()

router.get('/ping', async () => 'OK')

const points: Point[] = [{ text: 'foo', tags: [] }, { text: 'bar', tags: [] }]
router.get('/points', async () => points)

export default router