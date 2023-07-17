
db.createCollection( 'usuario', {validator: {$jsonSchema: {bsonType: 'object',title:'usuario',required: [         'email',          'password',          'nombre de usuario',          'Fecha de nacimiento',          'país',          'canal'],properties: {email: {bsonType: 'string'},password: {bsonType: 'string'},nombre de usuario: {bsonType: 'string'},Fecha de nacimiento: {bsonType: 'date'},sexo: {enum: },país: {bsonType: 'string'},código postal: {bsonType: 'int'},canal: {bsonType: 'objectId'}}         }      },
capped:
});  