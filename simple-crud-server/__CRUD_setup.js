/**
 * 
 * -----------------------------------------------------------
 *                      CRUP MongoDB Node
 * https://www.mongodb.com/docs/drivers/node/current/usage-examples/
 * -----------------------------------------------------------
 * 
 * ---------
 *  CREATE
 * ---------
 * ### Server Side
 * step 1: app.post('/', async (req, res) => {}) N>B> funciton must be async
 * step 2: access data from req.body N>B> Make sure you use app.use(express.json()) middleware
 * step 3: const result = await examleColleciton.insertOne(user)
 * step 4: res.send(result)
 * 
 * 
 * ### Client Side
 * step 1: create fetch
 * step 2: add second parameter as an object(method, headers, body) 
 *      2.1: method: 'POST'
 *      2.2: headers: { 'collection-type' : 'applicaiton/json' }
 *      2.3: body: JSON.stringify(user)
 * 
 * 
 * 
 * --------------
 *   READ (Many)
 * --------------
 * ### Server Side
 * step 1: create a curson > cursor = exampleCollection.find() N>B> for multiple
 * step 2: const result = await cursor.toArray();
 * step 3: res.send(result)
 * 
 * ----------------
 *   DELETE (One)
 * ----------------
 * ### Server Side
 * step 1: app.delete('/:id', async (req, res) => {}) N>B> funciton must be async
 * step 2: get id > const id = req.params.id
 * step 3: run a query > const query = {_id : new ObjectId(id)} N>B> must import ObjectId
 * step 4: const result = await exampleCollection.deleteOne(query)
 * step 5: res.send(result)
 * 
 * ### Client Side
 * step 1: create fetch
 * step 2: add second parameter as an object(method, headers, body) 
 *      2.1: method: 'DELETE'
 *
 */