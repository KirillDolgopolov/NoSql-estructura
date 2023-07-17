
db.createCollection( 'publicación de video', {validator: {$jsonSchema: {bsonType: 'object',title:'publicación de video',required: [         'fecha y hora',          'video'],properties: {fecha y hora: {bsonType: 'timestamp'},video: {bsonType: 'objectId'}}         }      },
capped:
});  