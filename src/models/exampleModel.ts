import mongoose, { Schema, Document, Types } from 'mongoose';

// Define the interface for the document
interface IExample extends Document {
  stringField: string;
  numberField: number;
  dateField?: Date;
  bufferField?: Buffer;
  booleanField?: boolean;
  mixedField?: any;
  objectIdField?: Types.ObjectId;
  arrayField?: string[];
  decimal128Field?: mongoose.Types.Decimal128;
  mapField?: Map<string, string>;
  nestedObject?: {
    nestedString: string;
    nestedNumber: number;
  };
  listOfLists?: number[][];
  listOfObjects?: { subField1: string; subField2: number }[];
  emailField: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the schema
const ExampleSchema = new Schema<IExample>(
  {
    stringField: {
      type: String,
      required: [true, 'String field is required'],
      minlength: [5, 'String field must be at least 5 characters long'],
      maxlength: [50, 'String field must be less than 50 characters long'],
      default: 'Default String',
    },
    numberField: {
      type: Number,
      required: [true, 'Number field is required'],
      min: [0, 'Number field must be at least 0'],
      max: [100, 'Number field must be less than or equal to 100'],
      default: 42,
    },
    dateField: {
      type: Date,
      default: Date.now,
    },
    bufferField: Buffer,
    booleanField: {
      type: Boolean,
      default: false,
    },
    mixedField: {
      type: Schema.Types.Mixed,
      default: {},
    },
    objectIdField: {
      type: Schema.Types.ObjectId,
      ref: 'ExampleModel',
    },
    arrayField: {
      type: [String],
      default: ['defaultItem1', 'defaultItem2'],
    },
    decimal128Field: {
      type: Schema.Types.Decimal128,
      default: 0.0,
    },
    mapField: {
      type: Map,
      of: String,
      default: new Map([['key1', 'value1'], ['key2', 'value2']]),
    },
    nestedObject: {
      nestedString: {
        type: String,
        default: 'Nested Default String',
      },
      nestedNumber: {
        type: Number,
        default: 10,
      },
    },
    listOfLists: {
      type: [[Number]],
      default: [[1, 2, 3], [4, 5, 6]],
    },
    listOfObjects: {
      type: [
        {
          subField1: {
            type: String,
            default: 'SubField Default',
          },
          subField2: {
            type: Number,
            default: 100,
          },
        },
      ],
      default: [
        { subField1: 'Default1', subField2: 100 },
        { subField1: 'Default2', subField2: 200 },
      ],
    },
    emailField: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email address'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Add index on emailField for uniqueness
ExampleSchema.index({ emailField: 1 }, { unique: true });

// Middleware example (pre-save hook for validation)
ExampleSchema.pre<IExample>('save', function (next) {
  console.log('Saving document...');
  next();
});

// Create and export the model
const ExampleModel = mongoose.model<IExample>('ExampleModel', ExampleSchema);
export default ExampleModel;
