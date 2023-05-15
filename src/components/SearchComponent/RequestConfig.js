export function getRequestConfig(startDate, endDate, inn) {

    const config = {
        issueDateInterval: {
            startDate: `${startDate}T00:00:00+03:00`,
            endDate: `${endDate}T23:59:59+03:00`
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        sparkId: null,
                        entityId: null,
                        inn: inn,
                        maxFullness: true,
                        inBusinessNews: null
                    }
                ],
                onlyMainRole: true,
                tonality: "any",
                onlyWithRiskFactors: false,
                riskFactors: {
                    and: [],
                    or: [],
                    not: []
                },
                themes: {
                    and: [],
                    or: [],
                    not: []
                }
            },
            themesFilter: {
                and: [],
                or: [],
                not: []
            }
        },
        searchArea: {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: []
        },
        attributeFilters: {
            excludeTechNews: true,
            excludeAnnouncements: true,
            excludeDigests: true
        },
        similarMode: "duplicates",
        limit: 1000,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: [
            "totalDocuments",
            "riskFactors"
        ]
    };

    return config
}