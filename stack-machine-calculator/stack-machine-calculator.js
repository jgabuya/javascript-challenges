const stackMachineCalculator = (instructions) => {
    const instStack = instructions.trim().split(' ');
    let resStack = [];

    const doAdd = stack => {
        stack.push(stack.pop() + stack.pop());
    };

    const doSub = stack => {
        stack.push(stack.pop() - stack.pop());
    };

    const doPop = stack => {
        stack.pop();
    };

    const doDup = stack => {
        stack.push(stack[stack.length - 1]);
    };

    const doInt = (stack, val) => {
        stack.push(val);
    };

    const doProcess = (stack, val) => {
        switch (val) {
            case 'ADD':
                doAdd(stack);
                break;

            case 'SUB':
                doSub(stack);
                break;

            case 'POP':
                doPop(stack);
                break;

            case 'DUP':
                doDup(stack);
                break;

            default:
                doInt(stack, Number(val));
                break;
        }

        return stack;
    };

    instStack.forEach((instruction) => {
        doProcess(resStack, instruction);
    });

    return resStack.pop();
}

module.exports = stackMachineCalculator
