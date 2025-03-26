const express = require('express');

const app = express();

const examGroupRoutes = require('./routes/examGroupRoutes');

app.use('/api', examGroupRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//change
<<<<<<< HEAD
console.log("Member's change in app.js");
=======
console.log("Leader's change in app.js");
>>>>>>> main