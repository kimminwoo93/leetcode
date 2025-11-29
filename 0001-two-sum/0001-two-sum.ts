function twoSum(nums: number[], target: number): number[] {
    const answers: number[] = [];

    for(let i: number = 0; i < nums.length; i++) {
        // 타겟에 대한 모든 해가 나왔을 경우 반복문 탈출
        if(answers.length === 2) {
            break;
        }

        for(let j: number = i + 1; j < nums.length; j++) {
            const compareSum: number = nums[i] + nums[j];

            // 중간 연산 결과 로그
            // console.log(`first operand: ${i} / second operand: ${j}`);
            // console.log(`target: ${target} / compare sum: ${compareSum}`);

            if(target === compareSum) {
                answers.push(i);
                answers.push(j);
            }
        }
    }

    return answers;
};