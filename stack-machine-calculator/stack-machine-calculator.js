const stackMachineCalculator = (instructions) => {
    const instStack = instructions.trim().split(' ');
    let resStack = [];

    const doAdd = stack => {
        return stack.push(stack.pop() + stack.pop());
    };

    const doSub = stack => {
        return stack.push(stack.pop() - stack.pop());
    };

    const doPop = stack => {
        stack.pop();
        return stack();
    };

    const doDup = stack => {
        stack.push(stack[stack.length - 1]);
        return stack;
    };

    const doInt = (stack, val) => {
        stack.push(val);
        return stack;
    };

    const doProcess = (stack, val) => {
        switch (val) {
            case 'ADD':
                stack = doAdd(stack);
                break;

            case 'SUB':
                stack = doSub(stack);
                break;

            case 'POP':
                stack = doPop(stack);
                break;

            case 'DUP':
                stack = doDup(stack);
                break;

            default:
                stack = doInt(stack, Number(val));
                break;
        }

        return stack;
    };

    instStack.forEach((instruction) => {
        resStack = doProcess(resStack, instruction);
    });

    return resStack[resStack.length - 1];
}

module.exports = stackMachineCalculator
