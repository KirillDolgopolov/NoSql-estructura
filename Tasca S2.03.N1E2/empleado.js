
db.createCollection( 'empleado', {validator: {$jsonSchema: {bsonType: 'object',title:'empleado',required: [         'nombre',          'apellidos',          'NIF',          'teléfono',          'puesto',          'pizzería'],properties: {nombre: {bsonType: 'string'},apellidos: {bsonType: 'string'},NIF: {bsonType: 'string'},teléfono: {bsonType: 'int'},puesto: {enum: },pizzería: {bsonType: 'objectId'}}         }      },
capped:
});  