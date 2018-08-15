import index from './mock/index';

export default {
    [`GET /api/user`](req, res){
        console.log('req...', req.query);
        res.json(index)
    },
    [`GET /api/list`](req, res){
        res.json([]);
    }
};
