
db.createCollection( 'comentatios', {validator: {$jsonSchema: {bsonType: 'object',title:'comentatios',required: [         'texto',          'fecha y hora',          'video'],properties: {texto: {bsonType: 'string'},fecha y hora: {bsonType: 'timestamp'},video: {bsonType: 'objectId'}}         }      },
capped:
});  