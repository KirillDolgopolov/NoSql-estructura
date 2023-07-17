
db.createCollection( 'canal', {validator: {$jsonSchema: {bsonType: 'object',title:'canal',required: [         'nombre',          'fecha de creación',          'usuario_creador'],properties: {nombre: {bsonType: 'string'},descripción: {bsonType: 'string'},fecha de creación: {bsonType: 'date'},usuario_creador: {bsonType: 'objectId'}}         }      },
capped:
});  