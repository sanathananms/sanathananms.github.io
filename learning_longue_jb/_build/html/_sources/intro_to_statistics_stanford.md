# Introduction to statistics
This course from Stanfor University supported by Coursera

**Bias and Chance error**

$$
estimate  = parameter + bias + chance\ error
$$

- estimate has to be somewhere colse to the parameter
- there will be a bias if the sampling is not done well
- chance error is unavoidable and it get smaller as the sample becomes larger
- sample average is actually random, because sampling is a random process. That means that $\bar{x}$ won't be exactly equal to the population mean $\mu$
- Standard error (SE) it tells you roughly how far off the statistic will be from an expected value

$$
Standard error, SE = \frac{\sigma}{\sqrt{n}}
$$
- it is important to note that SE does not depends on the size of the population, rather it depens only on the size of the sample. So a good number of sample is good enough to minimize the SE. in other words in statistics we do not need to deal with the size of the population, we need to deal only with the size of the sample selected. So, this simple formula that can help us determine what sample size we need for a desired accuracy. 
- **The central limit theorem** refers to large samples drawn with replacement,
and it says that the result will approximately follow the normal curve.

## Correlation
- correlation coefficient, $r$ can be $+1$ or $>0$ for positive correlation and can be $-1$ or $<0$ for negative correlation.
- Also keep in mind that $r$ is useful inly in measuring *linear association* i.e only for linear scatters

## Residual Plots, Heteroscedasticity, and Transformations
- Residual are useful for checking whether the regression is appropriate. 

## Outliers
- **Influential points**: Whether or not a point is influential can only be told by refitting the regression line without using that point. For such an analysis, the residual plot turns out to be not very helpful.

## Confidence intervals
- why is this called a confidence interval? Where does the name confidence come from? And why don't we simply say probability? Well, the population percentage mu is a fixed number. And that number is either inside the interval or outside the interval. So once we write down the confidence interval, there are no more chances involved. And for that reason, we talk about confidence. The randomness in this procedure comes really through the sampling. If we sampled another 1,000 voters, we will get a slightly different interval. So, the interpretation of a 95% confidence interval is, that if we do many polls and for each poll we do a confidence interval, then 95% of these intervals trap the population percentage and therefore, 5% percent will miss it.

## Testing Hypothesis
- Null hypothesis
