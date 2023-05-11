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
 * 
 * -------------------------
 *     EDIT / SINGLE VIEW
 * -------------------------
 * ### Server Side
 * step 1: app.get('/:id', async (req, res) => {}) N>B> funciton must be async
 * step 2: get id > const id = req.params.id
 * step 3: run a query > const query = {_id : new ObjectId(id)} N>B> must import ObjectId with new keyword
 * step 4: const result = await exampleCollection.findOne(query)
 * step 5: res.send(result)
 * 
 * ### Client Side
 * step 1: <Link to ="`/users/${id}">Edit</Link>
 * step 2: Create a dynamic route
 *      2.1: path: '/users/:id',
 *      2.2: loader: ({params}) => fetch(`url/${params.id})
 * 
 * 
 * ------------------
 *     UPDATE
 * ------------------
 * ### Server Side
 * step 1: app.put('/:id', async (req, res) => {}) N>B> funciton must be async
 * step 2: get id > const id = req.params.id
 * step 3: get body > const user = req.body;
 * step 4: run a query > const filter = {_id : new ObjectId(id)} N>B> must import ObjectId with new keyword
 * step 5: create a options > const options = { upsert : true }
 * step 6: declare the updated value > const updatedUser = {
 *              $set: {
 *                  name: user.name,
 *                  email: user.email,
 *              }
 *         }
 * step 7: const result = await exampleCollection.updateOne(filter, updatedUser, options);
 * step 8: res.send(result)
 * 
 * ### Client Side
 * step 1: create fetch (`url/${id})
 * step 2: add second parameter as an object(method, headers, body) 
 *      2.1: method: 'PUT'
 *      2.2: headers: { 'collection-type' : 'applicaiton/json' }
 *      2.3: body: JSON.stringify(user)
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
 * step 2: add second parameter as an object(method) 
 *      2.1: method: 'DELETE'
 *
 */