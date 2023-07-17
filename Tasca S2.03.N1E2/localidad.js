
db.createCollection( 'localidad', {validator: {$jsonSchema: {bsonType: 'object',title:'localidad',required: [         'nombre localidad',          'provincia'],properties: {nombre localidad: {bsonType: 'string'},provincia: {bsonType: 'objectId'}}         }      },
capped:
});  