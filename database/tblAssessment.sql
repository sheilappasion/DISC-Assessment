CREATE TABLE [dbo].[tblAssessment]
(
	[intAssessmentId] BIGINT NOT NULL IDENTITY,
	[strEmail] VARCHAR(50) NOT NULL, 
	[strLastName] VARCHAR(50) NOT NULL, 
	[strFirstName] VARCHAR(50) NOT NULL, 
	[strMiddleName] VARCHAR(50) NOT NULL, 
    CONSTRAINT [PK_tblAssessment] PRIMARY KEY CLUSTERED ([intAssessmentId] ASC)
)
