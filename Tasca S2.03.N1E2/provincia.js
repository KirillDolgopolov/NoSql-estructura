
db.createCollection( 'provincia', {validator: {$jsonSchema: {bsonType: 'object',title:'provincia',required: [         'nombre provincia'],properties: {nombre provincia: {bsonType: 'string'}}         }      },
capped:
});  