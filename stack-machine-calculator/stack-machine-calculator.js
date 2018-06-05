const stackMachineCalculator = (instructions) => {
    const instStack = instructions.trim().split(' ');
    let resStack = [];

    const doProcess = (stack, val) => {
        switch (val) {
            case 'ADD':
                stack.push(stack.pop() + stack.pop());
                break;

            case 'SUB':
                stack.push(stack.pop() - stack.pop());
                break;

            case 'POP':
                stack.pop();
                break;

            case 'DUP':
                stack.push(stack[stack.length - 1]);
                break;

            default:
                stack.push(Number(val));
                break;
        }
    };

    instStack.forEach((instruction) => {
        doProcess(resStack, instruction);
    });

    return resStack.pop();
}

module.exports = stackMachineCalculator
