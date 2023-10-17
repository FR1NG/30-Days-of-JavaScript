type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
	return new Promise(async (resolve, reject) => {
        try {
            let result = 0;
            result += await promise1;
            result += await promise2;
            resolve(result);
        } catch(error) {
            reject(error);
        }
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */