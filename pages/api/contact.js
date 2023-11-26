const { MongoClient } = require("mongodb")

async function handler(req, res){
    if(req.method == 'POST'){
        const {email, name, message} = req.body

        if(!email || !email.includes('@')
            || !name || name.trim() == ''
            || !message || message.trim() == ''
        ){
            return res.status(400).json({message: 'invalid input'})
        }

        const dataContact = {
            name: name, 
            email: email, 
            message: message
        }

        let client

        try {
            client = await MongoClient.connect('mongodb+srv://zaki:zaki123@cluster0.jvzl4pa.mongodb.net/')
        } catch (error) {
            res.status(400).json({ message: 'could not connect to database' })
            return 
        }

        let db = client.db('contact')

        try {
            const result = await db.collection('contact').insertOne(dataContact)
            dataContact.id = result.insertedId
        } catch (error) {
            client.close()
            res.status(400).json({ message: 'new contact can not insert' })
            return 
        }

        client.close()

       res.status(200).json({ status: 'success', contact: dataContact })

    }
}

export default handler