#include <stdio.h>
int main() {
    float principle, rate, time, SI;

    // Input principle, rate, and time
    printf("Enter principle (amount): ");
    scanf("%f", &principle);

    printf("Enter time (in years): ");
    scanf("%f", &time);

    printf("Enter rate (in percentage): ");
    scanf("%f", &rate);

    // Calculate simple interest
    SI = (principle * time * rate) / 100;

    // Print the resultant value of SI
    printf("Simple Interest = %.2f\n", SI);

    return 0;
}

