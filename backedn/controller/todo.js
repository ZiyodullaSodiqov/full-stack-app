const Todo = require('../modules/todo')
var r = 0;
var result;
    // malumot yaratish POST
    exports.createEvent = async (req, res, next) => {
        const result = new Todo({
            title: req.body.title,
            name:req.body.name,
            number:req.body.number,
            time:req.body.time,
            cash:req.body.cash,
            tayyor:req.body.tayyor,
            hisob: Number(  r = r + Number(req.body.cash))
        })
        await result.save()
        .then(()=>{
            res.status(201).json({
                message: 'Succesful to create',
                data: result
            })
        })
        .catch((error) =>{
            res.status(400).json({
                message: 'Failed to create',
                data: error
            })
        })
    }

    // get id

    exports.getEvents = async (req, res, next) => {
        await Todo.findById(req.params.id).exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
    
    }

       //get all

       exports.getAllEvents = async (req, res, next) => {
        await Todo.find().sort({createdAt: -1}).exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
    
    }

      // put id   
      exports.updateEvents = async (req, res, next) => {
        await Todo.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
            if (error) throw error
            else {
                value.name = req.body.name
                await value.save()
                    .then(() => {
                        res.json(value)
                    })
                    .catch((error) => {
                        res.json(error)
                    })
            }
        })
    }

        // delete

        exports.deleteEvents = async (req, res, next) => {
            await Todo.findByIdAndDelete(req.params.id).exec(async (error, value) => {
                if (error) throw error
                else {
                    res.json({
                        message: "Deleted successfully",
                        data: []
                    })
                }
            })
        }