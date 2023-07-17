
db.createCollection( 'categoria pizza', {validator: {$jsonSchema: {bsonType: 'object',title:'categoria pizza',required: [         'nombre de categoría',          'productos'],properties: {nombre de categoría: {bsonType: 'string'},productos: {bsonType: 'objectId'}}         }      },
capped:
});  