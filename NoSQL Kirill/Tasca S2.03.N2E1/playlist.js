
db.createCollection( 'playlist', {validator: {$jsonSchema: {bsonType: 'object',title:'playlist',required: [         'nombre',          'fecha de creación',          'estado',          'usuario'],properties: {nombre: {bsonType: 'string'},fecha de creación: {bsonType: 'date'},estado: {enum: },usuario: {bsonType: 'objectId'}}         }      },
capped:
});  