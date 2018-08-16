import list from './mock/list';

export default {
    [`get /api/list`](req, res){
        console.log(req.query);
        res.json(list)
    }
};
