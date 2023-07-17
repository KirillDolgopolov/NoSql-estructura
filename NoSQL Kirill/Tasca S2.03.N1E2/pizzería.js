
db.createCollection( 'pizzería', {validator: {$jsonSchema: {bsonType: 'object',title:'pizzería',required: [         'dirección',          'código postal',          'localidad'],properties: {dirección: {bsonType: 'string'},código postal: {bsonType: 'int'},localidad: {bsonType: 'objectId'}}         }      },
capped:
});  