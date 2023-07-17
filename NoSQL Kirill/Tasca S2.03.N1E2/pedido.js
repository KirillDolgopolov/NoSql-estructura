
db.createCollection( 'pedido', {validator: {$jsonSchema: {bsonType: 'object',title:'pedido',required: [         'fecha y hora',          'entrega',          'precio total',          'pizzería',          'cliente'],properties: {fecha y hora: {bsonType: 'timestamp'},entrega: {bsonType: 'bool'},precio total: {bsonType: 'decimal'},pizzería: {bsonType: 'objectId'},cliente: {bsonType: 'objectId'}}         }      },
capped:
});  