import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore';
import { firestore } from './firebase';
import Product from '../models/Product';

export const getProductsByCategoryFs = async (categoryId) => {
    const col = collection(firestore, 'products');
    let queryDb;
    if (categoryId === undefined || categoryId === null || categoryId === '') {
        queryDb = col;
    } else {
        queryDb = query(col, where('categoria', '==', Number(categoryId)));
    }

    const results = await getDocs(queryDb);
    return results.docs.map(prod => {
        return new Product({ id: prod.id, ...prod.data() });
    });
};

export const getProductByIdFs = async (id) => {
    const ref = doc(firestore, 'products', String(id));
    const prod = await getDoc(ref);

    if (prod.exists()) {
        return new Product({ id: prod.id, ...prod.data() });
    }
    
    const col = collection(firestore, 'products');
    const q = query(col, where('id', '==', Number(id)));
    const qs = await getDocs(q);
    const first = qs.docs[0];
    return first ? new Product({ id: first.id, ...first.data() }) : null;
};
