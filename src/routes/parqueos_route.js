const { Router } = require('express');
const { consultarEspParq, consultarGeneEspParq, guardarEspParq, eliminarEspParq, modificarEspParq } = require('../controllers/parqueo_controller');
const router = Router();

router.get('/api/espacioParq/:numero', consultarEspParq);
router.get('/api/espaciosParq', consultarGeneEspParq);
router.post('/api/espacioParq/registro', guardarEspParq);
router.delete('/api/espacioparq/eliminar/:id', eliminarEspParq);
router.put('/api/espacioParq/modificar', modificarEspParq);

module.exports = router;