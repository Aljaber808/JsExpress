//Creating a node.js (express) App to determin the endpoints of our APIs (GET, POST, PUT, DELETE)

const express = require('express');
const  service  = express();
const port = 3000;

// Get serivce: 
service.get('/tickets', (req, res) => {
    res.send("Reading tickets.");
});

// Get by ID service
service.get('/tickets/:id', (req, res) => {
    const {id} = req.params;
    res.send(`Reading ticket By ID: ${id}.`);
});

/* ***************** */
/* Versioning:
Choosing the version of our API as it can have different versions: 
*/

/* Authorization:
    making sure that the user has access to our serives
*/
/* Model Binding
Getting the params and assign it to vars to be used later (calls Binding)
const {id} = req.params;
 */
/*Model  validations:
Making sure that the inputs are what we are expcting to go further
*/
/* Exception Handling:
Error handling while processing the APIs
*/

/* Result Formating:
End formate of our calls
*/
/* ***************** */

// Post New tickets service
service.post("/tickets/", (req, res) => {
    res.send("Createing ticket.");
});

// Update tickets service
service.put("/tickets/", (req, res) => {
    res.send("Updating ticket.");
});

// Delete tickets service
service.delete('/tickets/:id', (req, res) => {
    const {id} = req.params;
    res.send(`Deleting ticket By ID: ${id}.`);
});

// runing the service:
service.listen(port, () => {console.log(`The serivce is listeing to port: ${port}.`)});




