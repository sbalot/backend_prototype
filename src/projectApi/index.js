const {
    getAllProjects,
    createProject,
    getOneProject,
    deleteProject,
    queryProject,
    uploadDocumentToProject,
    getDocumentFromProject,
    deleteDocumentFromProject,
    getNamedGraph,
    deleteNamedGraph,
    createNamedGraph,
    updateNamedGraph,
    getPublicProjects
} = require('./lbdApi')

module.exports = {
    getAllProjects,
    createProject,
    getOneProject,
    deleteProject,
    updateNamedGraph,
    queryProject,
    uploadDocumentToProject,
    getDocumentFromProject,
    deleteDocumentFromProject,
    getNamedGraph,
    deleteNamedGraph,
    createNamedGraph,
    getPublicProjects
}