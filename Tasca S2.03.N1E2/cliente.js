
db.createCollection( 'cliente', {validator: {$jsonSchema: {bsonType: 'object',title:'cliente',required: [         'nombre',          'apellidos',          'dirección',          'código postal'],properties: {nombre: {bsonType: 'string'},apellidos: {bsonType: 'string'},dirección: {bsonType: 'string'},código postal: {bsonType: 'int'}}         }      },
capped:
});  