const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {

  async index (request, response) {
    const ongs = await connection('ongs').select('*');

      return response.json(ongs);
},

   async create (request, response) {
     const { name, email, whatsapp, city, uf } = request.body;
    //variavel na requisição

       const id = crypto.randomBytes(4).toString('HEX'); //converte bytes em string hexadecimal

    //conexão con o banco
          await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
    })

    return response.json({ id });
    }
};