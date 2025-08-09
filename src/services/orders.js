import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firestore } from './firebase';

export const createOrder = async ({ buyer, items, total }) => {
    const ref = collection(firestore, 'orders');
    const order = {
        buyer,
        items: items.map(({ id, nombre, precio, amount }) => ({ id, nombre, precio, amount })),
        total,
        createdAt: serverTimestamp(),
    };
    const { id } = await addDoc(ref, order);
    return id;
};
