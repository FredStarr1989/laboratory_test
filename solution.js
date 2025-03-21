function serialize(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    
    const groups = [];
    let current = sorted[0];
    let count = 1;
    
    for (let i = 1; i <= sorted.length; i++) {
        if (sorted[i] === current) {
            count++;
        } else {
            groups.push([current, count]);
            current = sorted[i];
            count = 1;
        }
    }
    
    return groups.map(([num, count]) => {
        const numStr = num.toString(36);
        const countStr = count > 1 ? count.toString(36) : '';
        return numStr + countStr;
    }).join(',');
}

function deserialize(str) {
    if (!str) return [];
    
    const groups = str.split(',');
    const result = [];
    
    for (const group of groups) {
        const num = parseInt(group.slice(0, -1), 36);
        const count = group.length > 1 ? parseInt(group.slice(-1), 36) : 1;
        
        for (let i = 0; i < count; i++) {
            result.push(num);
        }
    }
    
    return result;
}

function testCompression(original) {
    const serialized = serialize(original);
    const deserialized = deserialize(serialized);
    const compressionRatio = (1 - serialized.length / JSON.stringify(original).length) * 100;
    
    return {
        original,
        serialized,
        deserialized,
        compressionRatio,
        isCorrect: JSON.stringify(original.sort()) === JSON.stringify(deserialized.sort())
    };
}

module.exports = {
    serialize,
    deserialize,
    testCompression
}; 