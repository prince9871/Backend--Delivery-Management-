import mongoose from 'mongoose';

const RouteSchema = new mongoose.Schema({
  routeId: { type: String, unique: true, required: true },
  orderId: { type: String, ref: 'Order', required: true },
  driverId: { type: String, ref: 'Driver', required: true },
  distanceTraveled: { 
  type: Number, 
  default:0
},
  steps: [
    {
      location: { 
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
      },
      timestamp: { type: Date, default: Date.now },
    }
  ],
  
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model('Route', RouteSchema);




// import mongoose from 'mongoose';

// const RouteSchema = new mongoose.Schema({
//   routeId: { type: String, unique: true, required: true },
//   orderId: { type: String, ref: 'Order', required: true },
//   driverId: { type: String, ref: 'Driver', required: true },
//   distanceTraveled: { type: Number, required: true }, 

//   steps: [
//     {
//       location: { type: String, required: true },
//       timestamp: { type: Date, default: Date.now },
//     }
//   ],
//   status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
// }, { timestamps: true });

// export default mongoose.model('Route', RouteSchema);
