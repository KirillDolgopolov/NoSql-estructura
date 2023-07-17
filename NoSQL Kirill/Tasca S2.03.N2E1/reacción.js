
db.createCollection( 'reacción', {validator: {$jsonSchema: {bsonType: 'object',title:'reacción',required: [         'like or dislike',          'fecha y hora',          'comentatios',          'usuario'],properties: {like or dislike: {enum: },fecha y hora: {bsonType: 'timestamp'},comentatios: {bsonType: 'objectId'},usuario: {bsonType: 'objectId'}}         }      },
capped:
});  