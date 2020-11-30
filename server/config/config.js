//======================
//   Puerto
//======================

process.env.PORT = process.env.PORT || 3000
//======================
//   Entorno
//======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//======================
//   Vencimiento del Token
//======================
// 60 Segundos
// 60 minutos
// 24 horas
// 30 Dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//======================
//   SEED de autenticacion
//======================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'; 

//======================
//   Database
//======================
let urlDB;
 if (process.env.NODE_ENV === 'dev')
 {
     urlDB = 'mongodb://localhost:27017/Cafe';
 }else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//mongodb+srv://srvgeo:<password>@cluster0.uhnnf.mongodb.net/<dbname>?retryWrites=true&w=majority

//======================
//   Google Client ID
//======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '199841206076-dseq1lj9c6hkhfp7ht931qhmhn5e9i36.apps.googleusercontent.com';