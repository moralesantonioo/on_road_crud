import {
    collection,
    getFirestore,
    doc,
    setDoc,
    deleteDoc,
    onSnapshot,
    getDoc
} from "firebase/firestore";
export class ProductsServices {
    db = getFirestore();
    async getProducts(setProducts, setLoading) {
        await onSnapshot(collection(this.db, "products"), (collection) => {
            const products = [];
            collection.forEach((doc) => {
                products.push({ id: doc.id, ...doc.data() })
            })
            setProducts(products
                .sort(function (x, y) {
                    return x.timestamp - y.timestamp;
                })
                .reverse());
            setLoading(false)
        })
    }

    async setProducts(values) {
        const newProduct = doc(collection(this.db, "products"));
        await setDoc(newProduct, values);
    }

    async deleteProduct(id) {
        const productDelete = await deleteDoc(doc(this.db, "products", `${id}`));
        console.log(productDelete, 'asdfsdf')
        console.log(this.db, 'id')
    }
}